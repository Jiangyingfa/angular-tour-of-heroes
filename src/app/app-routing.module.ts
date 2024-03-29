import { NgModule } from '@angular/core';
/* 导入 RouterModule 和 Routes，以便该应用具有路由功能 */
import { RouterModule, Routes } from '@angular/router';
/* 对 CommonModule 的引用和 declarations 数组不是必要的，因此它们不再是 AppRoutingModule 的一部分 */
/* 告诉路由器要去什么地方 */
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  /* path: 用来匹配浏览器地址栏中 URL 的字符串
     component: 导航到该路由时，路由器应该创建的组件
   */
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//添加默认路由
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'detail/:hero', component: HeroDetailComponent },
  {
    path: 'angular-base',
    loadChildren: () =>
      import('./angular-base/angular-base.module').then(m => m.AngularBaseModule),
  },
];

/* @NgModule 元数据会初始化路由器，并开始监听浏览器地址的变化 */
@NgModule({
  /* 这个方法之所以叫 forRoot()，是因为你要在应用的顶层配置这个路由器。
     forRoot() 方法会提供路由所需的服务提供者和指令，还会基于浏览器的当前 URL 执行首次导航
  */
  imports: [RouterModule.forRoot(routes)],

  /* 导出 RouterModule，以便它在整个应用程序中生效 */
  exports: [RouterModule]
})
export class AppRoutingModule { }
