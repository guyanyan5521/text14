<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {
public function __construct(){
    parent::__construct();
    $this ->load-> model("User_model");
}

    public function index()
    {
        $this->load->view('reg');
    }
    public  function get_all(){
        $query = $this -> User_model -> get_all();
        $this->load->view('list',array('list'=>$query));
    }
    public  function add(){
        $username=$this -> input -> post("reg");
       $result = $this -> User_model -> save_user($username);
       if($result > 0){
           echo "success";
       }
       else{
           echo "fail";
       }
    }
    public function del_user($id)
    {
        $rows = $this->User_model->del_user($id);
        if ($rows > 0) {
            redirect("User/get_all");
        }
    }
       public function update($id){
        $users = $this -> User_model -> get_user_id($id);
        $this ->load -> view("update",array('list'=>$users));

       }
    public function update_user($id){
        $list = $this -> User_model -> update($id);
        if($list>0){
            redirect("User/get_all");
        }
    }




}
