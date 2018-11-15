<?php
namespace Simple\Countdown\block;

class Times extends \Magento\Framework\View\Element\Template 
{
    public function getModuleStatus()
    {
        $moduleStatus = $this->_scopeConfig->getValue(
            'countdown/general/enable',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );

        return $moduleStatus;
    }

    public function getEndTime()
    {
        $endTime = $this->_scopeConfig->getValue(
            'countdown/general/times',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );

        return str_replace(':00', '', $endTime);
    }
    public function getDisplayText()
    {
        $displayText = $this->_scopeConfig->getValue(
            'countdown/general/display_text',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );

        return $displayText;
    }
    public function getDays()
    {
        $getDays = $this->_scopeConfig->getValue(
            'countdown/general/countdown_multiselect',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );

        return explode(',' , $getDays);
    }
}