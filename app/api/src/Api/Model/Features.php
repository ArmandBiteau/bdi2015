<?php

namespace Api\Model;

class Features
{
    protected $features;

    public function __construct($features)
    {
        $this->features = $features;
    }

    public function getFeatures()
    {
        $features = array();
        foreach ($this->features as $id => $feature) {
            $features[] = array(
                'id' => $id,
                'name' => $feature['name'],
                'description' => $feature['description']
            );
        }
        return $features;
    }

    public function getFeature($id)
    {
        if (!array_key_exists($id, $this->features)) {
            return null;
        }
        return array_merge(
            array('id' => $id),
            $this->features[$id]
        );
    }
}
