// @APIVersion 1.0.0
// @Title 报警转发器
// @Description 转发Alertmanager的webhook信息，到钉钉、微信、或其它客户端
// @Contact tay3223@qq.com
// @TermsOfServiceUrl https://blog.taycc.com/pages/prometheus/target_icmp.html
// @License Apache 2.0
// @LicenseUrl http://www.apache.org/licenses/LICENSE-2.0.html
package routers

import (
	"GoMessage/controllers"
	"GoMessage/controllers/alertmanager"
	web2 "GoMessage/controllers/web2"

	beego "github.com/beego/beego/v2/server/web"
)

func init() {
	//静态页面2
	beego.Router("/", &controllers.IndexController{})
	beego.Router("/go/message", &web2.ApiControllers{})
	//beego.Router("/go/message/:namespace", &web2.ApiControllers{})

	//命名空间
	ns := beego.NewNamespace("/v1",

		//与web界面的api没有任何关系，唯一有关系的可能是web2里有些函数引用了老的结构体
		beego.NSNamespace("/alertmanager",
			beego.NSInclude(&alertmanager.K8sControllers{}),
			beego.NSInclude(&alertmanager.LinuxControllers{}),
		),
		beego.NSNamespace("/test",
			beego.NSInclude(&controllers.TestController{}),
		),
		//beego.NSNamespace("/text",
		//	beego.NSInclude(&text.WechatControllers{}),
		//),

		//以下部分的路由才是有用的
		beego.NSNamespace("/web",
			//beego.NSInclude(&web2.JsonControllers{}),
			//beego.NSInclude(&web2.MapControllers{}),
			//beego.NSInclude(&web2.TemplateControllers{}),

			beego.NSRouter("/json", &web2.JsonControllers{}),
			beego.NSRouter("/map", &web2.MapControllers{}),
			beego.NSRouter("/template", &web2.TemplateControllers{}),
			beego.NSRouter("/client", &web2.Clients{}),
			beego.NSRouter("/client/:id:int", &web2.Client{}),
			beego.NSRouter("/client/active", &web2.ClientActive{}),
		),
	)

	//注册命名空间
	beego.AddNamespace(ns)
}
