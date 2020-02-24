<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use App\User;
use DB;



class UserController extends Controller
{
    public function update(UserRequest $request, $id)
    {
        $user = User::findOrFail($id);

        $user->update($request->validated());

        return response()->json([
            'user' => $user
        ], 201);
    }

    function register(Request $request)
    {
        $post = $request->input();
        $month = $request->input('month');
        $day = $request->input('day');
        $year = $request->input('year');
        $date=mktime(11, 14, 54,$month, $day, $year);
        $data=array('f_name'=>$request->input('f_name'),
                "s_name"=>$request->input('s_name'),
                "phone"=>$request->input("phone"),
                "email"=>$request->input("email"),
                "gender"=>$request->input('gender'),
                "birth"=>date("Y-m-d", $date),
                "comments"=>$request->input('com'),
            );
        
        DB::table('users')->insert($data);
        return ["status"=>"success"];
       
    }
}
