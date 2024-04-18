import { Component } from '@angular/core';
import { ElementData } from '../../model/element-data';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  element_data!: ElementData[];
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = this.element_data;
}
