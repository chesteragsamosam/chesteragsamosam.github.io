<?php
/**Enable Access-Control allow origin */
header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Methods: POST, GET, PUT");
header("Access-Control-Allow-Headers: Content-Type");

require_once('MysqliDb.php'); // import MysqliDb.php
$db = new MysqliDb ('localhost', 'root', '', 'todo');
$request = json_decode(file_get_contents("php://input")); //read a file into a string

if(isset($_GET['run'])){
    $result = array('error' => false);

    switch ($_GET['run']) {

        case 'read':
            $show = array("id", "description", "status");
            $todos = $db->get("todocrud", null, $show);
            if ($db->count > 0)
                foreach ($todos as $todo) {
                    $result['todo'] = $todos;
                }
          break;

        case 'add':
            if ($request != null) {
                $data = array("description" => "$request->description");
                $data = array("status" => "$request->status");
                if($db->insert('todocrud', $data)){
                    $show = array("id", "description,status");
                    $todos = $db->get("todocrud", null, $show);
                    if ($db->count > 0)
                        foreach ($todos as $todo) {
                            $result['todo'] = $todos;
                        }
                }
            }
          break;

        case 'update':
            $db->where('id', $request->id);
            $data = array('description' => "$request->description");
            $data = array("status" => "$request->status");
            $db->where('id', $request->id);
            if ($db->update('todocrud', $data))
            
                $show = array("id", "description,status");
                $todos = $db->get("todocrud", null, $show);
                if ($db->count > 0)
                    foreach ($todos as $todo) {
                        $result['todo'] = $todos;
                    }
                // echo $db->count . ' records were updated';
            else
                echo 'update failed: ' . $db->getLastError();
          break;

        case 'delete':
            $db->where('id', $request->id);
            if ($db->delete('todocrud')) 
                $show = array("id", "description,status");
                $todos = $db->get("todocrud", null, $show);
                if ($db->count > 0)
                    foreach ($todos as $todo) {
                        $result['todo'] = $todos;
                    }
          break;
        default:
            $result = array('error' => false);
    }
    echo (json_encode($result));
}
