﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using elohell.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace elohell.Controllers
{
    public class HomeController : Controller
    {
        private static readonly IList<CommentModel> _comments;

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        static HomeController()
        {
            _comments = new List<CommentModel>
            {
                new CommentModel
                {
                    Id = 1,
                    Author = "Daniel Lo Nigro",
                    Text = "Hello ReactJS.NET World!"
                },
                new CommentModel
                {
                    Id = 2,
                    Author = "Pete Hunt",
                    Text = "This is one comment"
                },
                new CommentModel
                {
                    Id = 3,
                    Author = "Jordan Walke",
                    Text = "This is *another* comment"
                },
            };
        }

        [Route("comments")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Comments()
        {
            return Json(_comments);
        }

        [Route("comments/new")]
        [HttpPost]
        public ActionResult AddComment(CommentModel comment)
        {
            comment.Id = _comments.Count + 1;
            _comments.Add(comment);
            return Content("Success :)");
        }
    }
}
