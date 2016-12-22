<?php
  namespace app\models;
  use yii\db\ActiveRecord;
  use Yii;
  class AdminTree extends ActiveRecord {
    // public $brief;
    // public $pid;
    // public $id;

    // public function attributes() {
    //   return[
    //     'id'=>"id",
    //     'pid'=>'pid',
    //     'brief'=>'brief'
    //   ];
    // }


    public static function tableName() {
      return 'pz_node';
    }
    /**
     * [page description]
     * @method page
     * @param  string  $kw [description]
     * @param  integer $cp [description]
     * @param  integer $mp [description]
     * @return [type]      [description]
     */
    public function page($pid=1) {
      return $this::find()->where(['pid'=> $pid])->asArray()->all();
    }
    /**
     * 获取一条节点信息
     * @method get
     * @param  [type] $id [description]
     * @return [type]     [description]
     */
    public function get($id) {
      return $this::findOne($id)->attributes;
    }
    /**
     * 获取所有的节点
     * @method pageAll
     * @return [type]  [description]
     */
    public function pageAll() {
       return $this::find()
       ->orderBy("pid asc,weight desc,id asc")
       ->asArray()
       ->all();
    }
  }
?>
