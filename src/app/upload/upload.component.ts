import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile!: File;
  resMessage: any="";
  imageName: any;
  coffeename:string="";
  flavour:string="";
  quantity:string="";
  caffeinecontent:string="";
  price:string="";
  discount:string="";


  constructor(private http:HttpClient){}
  ngOnInit(){
    this.selectedFile={} as any;
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  prdSubmitt(){
    
    const uploadImageData = new FormData();

    uploadImageData.append('dietFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append("coffeename",this.coffeename);
    uploadImageData.append("flavour",this.flavour);
    uploadImageData.append("quantity",this.quantity);
    uploadImageData.append("caffeinecontent",this.caffeinecontent);
    uploadImageData.append("price",this.price);
    uploadImageData.append("discount",this.discount);
    
    console.log(this.caffeinecontent);

    let res =this.http.post("http://localhost:5678/coffee/add",uploadImageData,
    {responseType:'text' as 'json'});
    res.subscribe(
      data=>{
        this.resMessage = data;
        console.log(data);
        this.coffeename="";
        this.flavour="";
        this.quantity="";
        this.caffeinecontent="";
        this.price="";
        this.discount="";
        
      }
    );

  }

}