<?php
/**
 * Copyright © Marcelo Caetano All rights reserved.
 * See COPYING.txt for license details.
 */
declare(strict_types=1);

namespace Funarbe\JanelaDeEntrega\Block;

use Magento\Framework\App\ObjectManager;

class JanelaDeEntrega extends \Magento\Framework\View\Element\Template
{
    public function getContent()
    {
        return ObjectManager::getInstance()->create(Shipping::class);
    }
}
