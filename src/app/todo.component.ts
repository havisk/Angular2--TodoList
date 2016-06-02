import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { DetailComponent } from './+detail';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/detail', component: DetailComponent},
  {path: '/', component: HomeComponent},
  {path: '*', component: HomeComponent}
])
export class TodoAppComponent {
  title = 'todo works!';
}
