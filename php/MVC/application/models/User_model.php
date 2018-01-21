<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2018/1/11
 * Time: 11:06
 */

class User_model extends CI_Model{

    public function save_user($username){
        $this -> db -> insert("user", array(
            "username" => $username

        ));
        return $this-> db ->affected_rows();
    }
    public function get_all(){
        return $this -> db -> get('user') -> result();
//        return $this ->db ->get_where('user',array('username'=>'qq'))->result();
    }
    public function del_user($id){
       $this -> db -> delete('user',array('id'=>$id));
        return $this-> db ->affected_rows();


    }
    public function get_user_id($id){
        return $this -> db -> get('user',array('id'=>$id)) -> row();
    }
    public function update($id){
       $username= $this -> input -> post("res");
        $this->db->where('id', $id);
        $this->db->update('user', array(
            "username" => $username
        ));
        return $this->db->affected_rows();


    }

}

?>
