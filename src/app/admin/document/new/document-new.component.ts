import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { DocumentService } from "../document.service";

@Component({
    selector: 'app-document-new',
    templateUrl: './document-new.component.html'
})
export class DocumentNewComponent implements OnInit {

    fileUploadForm!: FormGroup;

    constructor(private documentService: DocumentService) {}

    ngOnInit(): void {
        this.initializeForm();
    }

    onFileSelected(data: any) {
        const files = data.target.files;
        if(files) {
            const file = files[0];
            this.fileUploadForm.get('file')?.setValue(file);
        }
    }

    uploadFile(): void {
        const file = this.fileUploadForm.get('file')?.value;
        
        let formData = new FormData();
        formData.append('file', file);

        this.documentService.upload(formData)
            .subscribe(response => {
                console.log(response);
            });
    }

    private initializeForm() {
        this.fileUploadForm = new FormGroup({
            'file': new FormControl(null)
        });
    }

}