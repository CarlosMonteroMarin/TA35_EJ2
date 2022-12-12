import { Component, Input } from '@angular/core';
import { Forms } from '../models/Forms';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  @Input() valor : Forms| any;


}
