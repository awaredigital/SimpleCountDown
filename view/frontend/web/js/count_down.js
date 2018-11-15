define([
    'ko',
    'uiComponent',
    'jquery'
], function (ko, component, $) {
    'use strict';

    var self;

    return component.extend({

        delInfo: ko.observable(),

        initialize: function () {
            self = this;
            this._super();

            self.delInfo(this.displayText);         
            self.countDown();
        },

        countDown: function(){
            
            var 
                date        = new Date(),
                month       = date.getMonth(),
                day         = date.getDate(),
                weekDay     = date.getDay();

            var 
                days        = this.days,
                endTime     = this.endTime;

            var 
                hours = {
                    start:  new Date(date.getFullYear(), month, day),
                    end:    new Date(date.getFullYear(), month, day)
                };

            if(weekDay == days){
                $('.orders_over').show().html('All orders placed today will ship on monday.');
            } else {
                hours.start.setHours(1);
                hours.end.setHours(endTime);
            }

            var 
                countHours   = ('0' + (hours.end.getHours() - date.getHours())).substr(-2),
                countMinutes = ('0' + (59 - date.getMinutes())).substr(-2),
                countSeconds = ('0' + (59 - date.getSeconds())).substr(-2);
                

            // If it's currently not within the hours, don't show the countdown
            if($('.hours-timer').html() == '00'){
                $('.hours').hide();
                if($('.minutes-timer').html() == '00'){
                    $('.minutes').hide();
                }
            }

            if(date.getHours() < hours.start.getHours() || date.getHours() > hours.end.getHours()){
                $('.count_down').hide();
                $('.orders_over').show().html('Orders will now be shipped tomorrow.');
            } else if($('.count_down').not(':visible')){
                $('.count_down').show();
            }

            $('.count_down .hours-timer').text(countHours);
            $('.count_down .minutes-timer').text(countMinutes);
            $('.count_down .seconds-timer').html(countSeconds);

            $(function(){
                setInterval(function(){
                self.countDown();
                }, 1000);
            });

        }
    })
});