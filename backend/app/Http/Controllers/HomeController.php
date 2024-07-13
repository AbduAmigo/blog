<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Carbon\Carbon;
use App\Models\Blog;
use App\Models\BlogCategory;
use DB;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() : Response
    {
        
        $all_blogs = Blog::with('category')->orderBy('id', 'DESC')->get();
        $categories = BlogCategory::all();
        $blogOnly = Blog::with('category')->orderBy('id', 'DESC')->first();//array_slice($all_blogs,1);
        $blogs = collect($all_blogs)->slice(0, -1)->where('id', '!=', $blogOnly->id)->all();//array_slice($all_blogs, 2);
        foreach($blogs as $blog)
        {
            $category_id = $blog->category_id;
            $date = Carbon::parse($blog->created_at);
            
            if($date->diffInDays(Carbon::now()) > 0){
                $blog->date = $date->diffInDays(Carbon::now()) . ' days ago';
            }else{
                $blog->date = $date->diffInHours(Carbon::now()) . ' hours ago';
            }
            $blog->name = BlogCategory::select('name')->where('id', '=', $category_id)->get();
            
            // YouTube video URL
            if($blog->type == 'video'){
                $videoUrl = $blog->url; //'https://www.youtube.com/embed/SA72muJiKQI';

                // Extract the video ID from the URL
                $videoId = explode('/', parse_url($videoUrl, PHP_URL_PATH))[2];

                // Construct the thumbnail URL
                $thumbnailUrl = "https://img.youtube.com/vi/{$videoId}/default.jpg";

                // Output the thumbnail image
                $blog->thumbnail = $thumbnailUrl;
                $blog->video_id = $videoId;
            }

        } 
        // dd($blogOnly);
        // dd($blogs);
        return Inertia::render('Welcome', [
            'blogOnly' => $blogOnly,
            'blogs' => $blogs,
            'categories' => $categories,
        ]);
    }
    public function videos() : Response
    {
        $blogs = DB::table('blogs')->join('category')->where('type', '=', 'video')->get()->result();
        // dd($blogs);
        return Inertia::render('Blogs/Index', [
            'blogs' => $blogs
        ]);
    }
 
    public function api_blog($type)
    {
        // dd('A');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET");
        $blogs = Blog::with('category')->orderBy('id', 'DESC')->where('type', '=', $type)->get();
        $categories = BlogCategory::all();
        foreach($blogs as $blog)
        {
            $category_id = $blog->category_id;
            $date = Carbon::parse($blog->created_at);
            
            if($date->diffInDays(Carbon::now()) > 0){
                $blog->date = $date->diffInDays(Carbon::now()) . ' days ago';
            }else{
                $blog->date = $date->diffInHours(Carbon::now()) . ' hours ago';
            }
            $blog->name = BlogCategory::select('name')->where('id', '=', $category_id)->get();

            // YouTube video URL
            if($type == 'video'){
                $videoUrl = $blog->url; //'https://www.youtube.com/embed/SA72muJiKQI';

                // Extract the video ID from the URL
                $videoId = explode('/', parse_url($videoUrl, PHP_URL_PATH))[2];

                // Construct the thumbnail URL
                $thumbnailUrl = "https://img.youtube.com/vi/{$videoId}/default.jpg";

                // Output the thumbnail image
                $blog->thumbnail = $thumbnailUrl;
                $blog->video_id = $videoId;
            }

        }     
        // dd($blogs);
        
        echo json_encode(array('status' => 1, 
                               'blogs' => $blogs,
                               'categories' => $categories,
                               'msg' => 'success fetched'), true);
        die();
    }

    public function api_blog_detail($type, $news_id)
    {
        // dd('A');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET");
        $blogs = Blog::select('n.*', 'c.name')
                      ->from('blogs as n')
                      ->join('blog_categories as c', 'c.id','=','n.id')
                      ->where('n.type', '=', $type)
                      ->where('n.id', '=', $news_id)
                      ->get();
                
        // dd($blogs);
        
        echo json_encode(array('status' => 1, 
                               'blogs' => $blogs,
                               'msg' => 'success fetched'), true);
        die();
    }

}