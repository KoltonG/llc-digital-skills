$(function(){var a=(new Date).getFullYear();$("[data-year]").text(a);var t="<ul>",e,l,n,i;$("article > h2, blockquote h2").each(function(){l=$(this),n=l.text(),i="#"+l.attr("id"),e="<li><a href='"+i+"'>"+n+"</a></li>",t+=e}),t+="</ul>",$(".table-of-contents").append(t),$("[data-collapse]").on("click",function(){$(this).parent().toggleClass("collapse")});var d=$("[data-nav]").waypoint({handler:function(a){"down"===a?$("[data-nav]").addClass("fixed"):$("[data-nav]").addClass("fixed")},offset:40}),d=$("[data-main]").waypoint({handler:function(a){"up"===a&&$("[data-nav]").removeClass("fixed")}});$("a[href^='http://'], a[href^='https://'], a[href^='/llc-digital-skills/assets/img/']").attr("target","_blank")});