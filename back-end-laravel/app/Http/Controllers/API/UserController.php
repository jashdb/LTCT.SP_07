<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function login(Request $request){
        $username = $request->input('username');
        $password = $request->input('password');

        $user = DB::table('User')
                ->where('username',$username)->first();

        if (($user != NULL) && (Hash::check($password, $user->password))) {
            return response()->json([
                'status' => 200,
                'user' => $user,
                'message' => 'Login Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Login failed!',
            ]);
        }
    }

    public function register(Request $request){
        $newUser = new User();
        $newUser->username = $request->input('username');
        $newUser->password = Hash::make($request->input('password'));
        $newUser->fullname = $request->input('fullname');
        $newUser->email = $request->input('email');
        $newUser->role = $request->input('role');
        $newUser->avatar = "https://www.hoteljob.vn/cong-dong/frontend/images/default_avatar.png"; //Default avatar image

        $newUser->save();
        return response()->json([
            'status' => 200,
            'user' => $newUser,
            'message' => 'Create Account Successfully',
        ]);
    }
}
