import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './companents/get-all/get-all.component';
import { GetByIdComponent } from './companents/get-by-id/get-by-id.component';
import { CreateComponent } from './companents/create/create.component';
import { UpdateComponent } from './companents/update/update.component';
import { DeleteComponent } from './companents/Delete/delete.component';

const routes: Routes = [
{ path:"getall",component:GetAllComponent},
{path:"getbyid",component:GetByIdComponent},
{path:"create",component:CreateComponent},
{path:"update",component:UpdateComponent},
{path:"delete",component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
