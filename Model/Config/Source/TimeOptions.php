<?php
namespace Simple\Countdown\Model\Config\Source;

class TimeOptions extends \Magento\Captcha\Model\Config\Form\AbstractForm
{
    /**
     * Returns options for form Times
     *
     * @return array
     */
    public function toOptionArray()
    {
		$arr = array();		
		$event_time = "00:00";
		$time_block = 96;
		$event_length = 60; // minutes
		for($i = 0,$eTime =strtotime($event_time);$i<$time_block; $i++, $eTime = strtotime("+$event_length minutes", $eTime))
		{
			$time = date('H:i', $eTime);
			$arr[] = array('value'=>$time, 'label'=>$time);
		}        
        return $arr;
    }
}