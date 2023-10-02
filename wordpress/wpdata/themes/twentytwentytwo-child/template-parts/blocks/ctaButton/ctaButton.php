<?php
    $blockName ="cta-button";
    $label = get_field('label');
    $align = get_field('align');
?>
<div class="<?php echo $blockName . '-' . $align ?>">
<div class="<?php echo $blockName ?>">
    <?php echo $label ?>
</div>
</div>
<style>
    .<?php echo $blockName ?> {
        padding:5px 10px;
        border-radius: 5px;
        color:white;
        font-weight:bold;
        display:inline-block;
        background: #ec489a;
    }
    .<?php echo $blockName . '-' . $align ?> {
        text-align:<?php echo $align ?>;
    }
    
</style>