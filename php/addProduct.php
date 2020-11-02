<?php
class ProductProperties
{
    private $properties = array();

    public function getProperties()
    {
        return $this->properties;
    }

    public function addProperty($id, $value)
    {
        $this->properties[$id] = $value;
    }

    public function getProperty($id)
    {
        return $this->properties[$id];
    }
}

abstract class Product
{
    private $properties;

    //more methods

    public function __construct(ProductProperties $properties)
    {
        $this->properties = $properties;

    }

    public function getData(){

      return $this->properties->getProperties();
    }

}
class Run extends Product{


}



$test1 = new ProductProperties();
$test1->addProperty('test', 'tsdft');
$test = new Run($test1 );

//echo ProductProperties::$properties;
print_r($test->getData());
