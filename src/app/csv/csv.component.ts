import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CSVRecord } from '../CSVModel';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CSVComponent implements OnInit {

  public records: any[] = [];
  data: any;

  constructor(private r: Router) { }

  @Output() SendData = new EventEmitter();
  uploadListener($event: any): void {

    let text = [];
    let files = $event.srcElement.files;

    if (this.ValidFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);
        this.records = this.getRecord(csvRecordsArray, headersRow.length);
      
      };
    }
  }
  getRecord(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: CSVRecord = new CSVRecord();
        csvRecord.name = curruntRecord[0].trim();
        csvRecord.email = curruntRecord[1].trim();
        csvRecord.Phonenumberofcounterparty = curruntRecord[2].trim();
        csvRecord.Sourceaccountcurrency = curruntRecord[3].trim();
        csvRecord.Recipientaccountcurrency = curruntRecord[4].trim();
        csvRecord.Amount = curruntRecord[5].trim();
        csvRecord.Scheduledate = curruntRecord[6].trim();
        csvRecord.Reference = curruntRecord[7].trim();
        csvArr.push(csvRecord);
       
      }
    }
    return csvArr;
  }

  ValidFile(file: any) {
    return file.name.endsWith(".csv");
  }
  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }
  submit() {
    //this.data = JSON.stringify(this.records);
    
     this.SendData.emit(this.records);
    console.log(this.records)
    this.r.navigateByUrl('/table');
  }
  ngOnInit() { }
}
