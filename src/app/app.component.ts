import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesModule } from './feature.module';

@Component({
  standalone: true,
  imports: [RouterModule, FeaturesModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HCAID-Project-Group-16';
}
