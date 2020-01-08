import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  data: any;
  // sub: string;
  @Input() public tableData;
  constructor(private route: ActivatedRoute) {
    // this.sub = this.route.snapshot.queryParamMap.get('criteriaList');
    // console.log(this.sub, "dshfgjshdfjsdjfhsdjfgh");
   }

  ngOnInit() {
  //   this.route.params.subscribe(params=>
  //     {
  //       this.data=params['data'];

  //     }
  //     );
  //  console.log(this.tableData)
  }
  

}
