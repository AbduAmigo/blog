<?php

namespace App\Http\Controllers;

use App\Models\{User, Groups};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; 
use Inertia\Inertia;
use Inertia\Response;
use DB;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() : Response
    {
        $users = DB::table('users as u')
                ->join('groups as g', 'g.group_id', '=', 'u.group_id')
                ->select('u.id', 'u.email', 'u.name', 'u.group_id', 'u.created_at', 'g.name as group_name')
                ->get();
                // dd($users);
        $groups = Groups::all();                
        return Inertia::render('Users/Index', [
            'usersList' => $users,
            'groups' => $groups
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $groups = Groups::all();
        return Inertia::render(
            'Users/Create', [
                'groups' => $groups
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $request->validate([
            'group' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'phone' => 'required',
        ]);
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'group_id' => $request->group, // billing, sales, domain..
            'password' => Hash::make($request->password),
        ]);
        sleep(1);

        return redirect()->route('users.index')->with('message', 'User Created Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(Users $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        // dd($id);
        $groups = Groups::all();
        return Inertia::render(
            'Users/Edit',
            [
                'usersEdit' => User::findOrFail($id),
                'groups' => $groups
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'group' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:100',
            'phone' => 'required|max:14',
        ]);
        $id = $request->id;
        $array = array(
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'group_id' => $request->group, // billing, sales, domain..
        );
        DB::table('users')->where('id', $id)->update($array);
        sleep(1);

        return redirect()->route('users.index')->with('message', 'User Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        // dd($id);
        DB::table('users')->where('id', $id)->delete();
        sleep(1);

        return redirect()->route('users.index')->with('message', 'User Deleted Successfully');
    }
}