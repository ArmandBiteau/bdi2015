<?php

namespace Api\Model;

class Events
{
    protected $events;

    public function __construct($events)
    {
        $this->events = $events;
    }

    public function getEvents()
    {
        $events = array();
        foreach ($this->events as $id => $event) {
            $events[] = array(
                'id' => $id,
                'name' => $event['name'],
                'description' => $event['description']
            );
        }
        return $events;
    }

    public function getEvent($id)
    {
        if (!array_key_exists($id, $this->events)) {
            return null;
        }
        return array_merge(
            array('id' => $id),
            $this->events[$id]
        );
    }
}
