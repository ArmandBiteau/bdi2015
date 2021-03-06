<?php

namespace Api;

use Api\Model\Events;


use \Slim\Slim;
use \Exception;

// TODO Move all "features" things to a class with index() and get() methods
class Application extends Slim
{
    public $configDirectory;
    public $config;

    protected function initConfig()
    {
        $config = array();
        if (!file_exists($this->configDirectory) || !is_dir($this->configDirectory)) {
            throw new Exception('Config directory is missing: ' . $this->configDirectory, 500);
        }
        foreach (preg_grep('/\\.php$/', scandir($this->configDirectory)) as $filename) {
            $config = array_replace_recursive($config, include $this->configDirectory . '/' . $filename);
        }
        return $config;
    }

    public function __construct(array $userSettings = array(), $configDirectory = 'config')
    {
        // Slim initialization
        parent::__construct($userSettings);
        $this->config('debug', false);
        $this->notFound(function () {
            $this->handleNotFound();
        });
        $this->error(function ($e) {
            $this->handleException($e);
        });




        // Config
        $this->configDirectory = __DIR__ . '/../../' . $configDirectory;
        $this->config = $this->initConfig();




        /*******************************/

        /****  HERE ARE MY CLASSES  ****/



        /****  EVENTS  ***************/

        $this->get('/events', function () {

            // Here I get dom datas
            $events = new Events($this->config['events']);

            // Here I send to front ;-)
            $this->response->headers->set('Content-Type', 'application/json');
            $this->response->setBody(json_encode($events->getEvents()));
        });

        $this->get('/events/:id', function ($id) {

            // Here I get dom datas
            $events = new Events($this->config['events']);

            $event = $events->getEvent($id);
            if ($event === null) {
                return $this->notFound();
            }

            // Here I send to front
            $this->response->headers->set('Content-Type', 'application/json');
            $this->response->setBody(json_encode($event));
        });


        /****  OTHER STUFFS  ***********/

        /* ... */


        /****  END OF MY CLASSES  ******/

        /*******************************/



    }

    public function handleNotFound()
    {
        throw new Exception(
            'Resource ' . $this->request->getResourceUri() . ' using '
            . $this->request->getMethod() . ' method does not exist.',
            404
        );
    }

    public function handleException(Exception $e)
    {
        $status = $e->getCode();
        $statusText = \Slim\Http\Response::getMessageForCode($status);
        if ($statusText === null) {
            $status = 500;
            $statusText = 'Internal Server Error';
        }

        $this->response->setStatus($status);
        $this->response->headers->set('Content-Type', 'application/json');
        $this->response->setBody(json_encode(array(
            'status' => $status,
            'statusText' => preg_replace('/^[0-9]+ (.*)$/', '$1', $statusText),
            'description' => $e->getMessage(),
        )));
    }

    /**
     * @return \Slim\Http\Response
     */
    public function invoke()
    {
        foreach ($this->middleware as $middleware) {
            $middleware->call();
        }
        $this->response()->finalize();
        return $this->response();
    }
}
