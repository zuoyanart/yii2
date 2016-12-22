<?php

namespace app\controllers\admin;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\AdminTree;

class IndexController extends Controller
{
    public $layout = false;
    public $enableCsrfValidation = false;//禁止使用csrf

    public function init() {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;//返回json
    }
    /**
     * get node
     * @method actionGet
     * @return [type]    [description]
     */
    public function actionGet() {
      // $param = json_decode(Yii)
      $tree = new AdminTree();
      $node = $tree->get(3);
      $json = json_encode($node);
      echo json_encode($node);
      echo $node['keyword'];
    }
    /**
     * page 操作
     * @method actionPage
     * @return [type]     [description]
     */
    public function actionPage() {
      $param = json_decode(Yii::$app->request->rawBody, true);
      // echo $param["pid"];
       $tree = new AdminTree();
       $nodelist = $tree->page($param['pid']);
       $msg = ['state'=>true, 'msg'=> $nodelist];
      \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
      return \yii\helpers\Json::encode($msg);
    }
    /**
     * [actionPageAll description]
     * @method actionPageAll
     * @return [type]        [description]
     */
    public function actionPageAll() {
        $tree = new AdminTree();
        $nodelist = $tree->pageAll();
        return json_encode($nodelist);
    }



}
