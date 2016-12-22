<?php
  namespace app\model;
  use yii;
  use yii\db\ActiveRecord;

  class AdminTree1 extends ActiveRecord {

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
    public function page($kw = '', $cp =1, $mp=10) {
      //  $this.find()
    }
    /**
     * 获取一条节点信息
     * @method get
     * @param  [type] $id [description]
     * @return [type]     [description]
     */
    public function get($id) {
      return $this->findOne($id);
    }
  }
?>
