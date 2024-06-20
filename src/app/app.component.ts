import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectItemGroup } from 'primeng/api';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public templates$: Observable<any[]|undefined>;
  private readonly templatesSubject: BehaviorSubject<SelectItemGroup[]> = new BehaviorSubject<SelectItemGroup[]>([]);

  public constructor()
  {
    this.templates$ = this.templatesSubject.asObservable();
  }

  ngOnInit() {
    setTimeout(() => {
      this.templatesSubject.next([
        {
          label: 'Group 1', value: '1', items: [
            { label: 'Item 1.1', value: '1.1' },
            { label: 'Item 1.2', value: '1.2' },
            { label: 'Item 1.3', value: '1.3' }
          ]
        },
        {
          label: 'Group 2', value: '2', items: [
            { label: 'Item 2.1', value: '2.1' },
            { label: 'Item 2.2', value: '2.2' },
            { label: 'Item 2.3', value: '2.3' }
          ]
        }
      ]);
    }, 3000);
  }
}
