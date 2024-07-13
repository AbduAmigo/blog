<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Blog;
use App\Models\BlogCategory;
use DB;
use Auth;

class BlogsController extends Controller
{
    public function index()
    {
        $blogs = Blog::with('category')->orderBy('id', 'DESC')->where('type', 'text')->get();
        // dd($blogs);
        return Inertia::render('Blogs/Index', [
            'blogs' => $blogs
        ]);
    }

    public function create()
    {
        $blogCategory = blogCategory::all();
        // dd($blogCategory);
        return Inertia::render('Blogs/Create', [
            'categories' => $blogCategory
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'name' => 'required',
            'author' => 'required',
            'content' => 'required|string|min:5',
        ]);

        $insert_array = array(
            'user_id' => Auth::id(),
            'type' => 'text',
            'title' => $request->title,
            'category_id' => $request->name,
            'author' => $request->author,
            'content' => $request->content,
        );
        if ($image = $request->file('image')) {
            $destinationPath = 'public/blogs';
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $insert_array['image'] = "$profileImage";
        }
        // dd($insert_array);
        $result = DB::table('blogs')->insert($insert_array);
        sleep(1);
        if ($result) {
            return redirect('blogs')->with('message', 'Data inserted successfully');
        } else {
            return redirect('blogs')->with('message', 'An error occurred!');
        }
    }

    public function edit($id)
    {
        $editData = Blog::findOrFail($id);
        $category_id = $editData->category_id;
        $blogCategory = blogCategory::all();
        // dd($editData->category_id);
        return Inertia::render(
            'Blogs/Edit',
            ['editData' => $editData, 'category' => $blogCategory]
        );
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'name' => 'required',
            'author' => 'required',
            'content' => 'required|string|min:5',
        ]);

        $update_array = array(
            'user_id' => Auth::id(),
            'title' => $request->title,
            'category_id' => $request->name,
            'author' => $request->author,
            'content' => $request->content,
        );
        if ($image = $request->file('image')) {
            $destinationPath = 'public/blogs';
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $update_array['image'] = "$profileImage";
        }
        // dd($update_array);
        $id = $request->id;
        $result = DB::table('blogs')->where('id', '=', $id)->update($update_array);
        sleep(1);
        if ($result) {
            return redirect('blogs')->with('message', 'Data inserted successfully');
        } else {
            return redirect('blogs')->with('message', 'An error occurred!');
        }
    }

    public function videos()
    {
        $videos = Blog::with('category')->orderBy('id', 'DESC')->where('type', 'video')->get();
        foreach($videos as $video)
        {
            $url = $video->url; //"https://www.youtube.com/embed/AY5qcIq5u2g";
            $videoId = substr($url, strrpos($url, '/') + 1);

            $video->video_id = $videoId;
        }
        // dd($videos);
        return Inertia::render('Videos/Index', [
            'videos' => $videos
        ]);
    }

    public function video_create()
    {
        $blogCategory = blogCategory::all();
        // dd($blogCategory);
        return Inertia::render('Videos/Create', [
            'categories' => $blogCategory
        ]);
    }

    public function video_store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'name' => 'required',
            'author' => 'required',
            'url' => 'required',
            'content' => 'required|string|min:5',
        ]);

        $insert_array = array(
            'user_id' => Auth::id(),
            'type' => 'video',
            'title' => $request->title,
            'category_id' => $request->name,
            'url' => $request->url,
            'author' => $request->author,
            'content' => $request->content,
        );
       
        // dd($insert_array);
        $result = DB::table('blogs')->insert($insert_array);
        sleep(1);
        if ($result) {
            return redirect('blogs/videos')->with('message', 'Data inserted successfully');
        } else {
            return redirect('blogs/videos')->with('message', 'An error occurred!');
        }
    }

    public function video_edit($id)
    {
        $editData = Blog::findOrFail($id);
        $category_id = $editData->category_id;
        $blogCategory = blogCategory::all();
        // dd($editData->category_id);
        return Inertia::render(
            'Videos/Edit',
            ['editData' => $editData, 'category' => $blogCategory]
        );
    }

    public function video_update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'name' => 'required',
            'author' => 'required',
            'content' => 'required|string|min:5',
        ]);

        $update_array = array(
            'user_id' => Auth::id(),
            'title' => $request->title,
            'type' => 'video',
            'category_id' => $request->name,
            'author' => $request->author,
            'content' => $request->content,
        );
        if ($image = $request->file('image')) {
            $destinationPath = 'public/blogs';
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $update_array['image'] = "$profileImage";
        }
        // dd($update_array);
        $id = $request->id;
        $result = DB::table('blogs')->where('id', '=', $id)->update($update_array);
        sleep(1);
        if ($result) {
            return redirect('blogs/videos')->with('message', 'Data inserted successfully');
        } else {
            return redirect('blogs/videos')->with('message', 'An error occurred!');
        }
    }
}
