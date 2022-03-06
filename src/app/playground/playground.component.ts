import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AsyncSubject, BehaviorSubject, last, map, Observable, ReplaySubject, Subject, Subscription, take, takeLast, takeUntil, tap } from "rxjs";
import { SubSink } from "subsink";
import { PlaygroundService } from "./playground.service";

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html'
})
export class PlaygroundComponent implements OnInit, OnDestroy {

    myInputValue: string = "test-value";
    allowEdit: boolean = false;
    reservationForm!: FormGroup;

    //subject
    subject = new Subject<number>();
    behaviourSubject = new BehaviorSubject<number>(0);
    replaySubject = new ReplaySubject<number>();
    asyncSubject = new AsyncSubject<number>();
    memoryLeakSubject = new Subject();

    data$?: Observable<any>;
    private subs = new SubSink();

    constructor(
        private activatedRoute: ActivatedRoute,
        private playgroundService: PlaygroundService)
    {}

    ngOnDestroy(): void {
        // this.subs.unsubscribe();
        //this.memoryLeakSubject.next();
        this.memoryLeakSubject.complete();
    }

    ngOnInit(): void {
        const queryParams = this.activatedRoute.snapshot.queryParams;
        const data = this.activatedRoute.snapshot.data;
        
        this.allowEdit = data["allowEdit"];

        //console.log(queryParams);
        console.log(data);
        
        this.initializeForm();

        //subject
        // this.subject.subscribe(data => {
        //     console.log('s1: ', data);
        // });

        // this.subject.next(1);
        // this.subject.next(2);

        // this.subject.subscribe(data => {
        //     console.log('s2: ', data);
        // });

        // this.subject.next(3);
        // this.subject.complete();

        //behaviour subject
        // this.behaviourSubject.subscribe(data => console.log('BS1: ', data));

        // this.behaviourSubject.next(1);
        // this.behaviourSubject.next(2);
        // this.behaviourSubject.next(3);

        // this.behaviourSubject.subscribe(data => console.log("BS2: ", data));
        // this.behaviourSubject.next(4);
        // this.behaviourSubject.next(5);
        // this.behaviourSubject.complete();

        //replay subject
        // this.replaySubject.subscribe(data=> console.log("RS1: ", data));

        // this.replaySubject.next(1);
        // this.replaySubject.next(2);
        // this.replaySubject.next(3);

        // this.replaySubject.subscribe(data => console.log("RS2: ", data));
        // this.replaySubject.next(4);
        // this.replaySubject.complete();

        // Async subject
        // this.asyncSubject.subscribe(data => console.log('ASYNC1: ', data));

        // this.asyncSubject.next(1);
        // this.asyncSubject.next(2);

        // this.asyncSubject.subscribe(data => console.log('ASYNC2: ', data));
        // this.asyncSubject.next(44);

        // this.asyncSubject.error('Error has been occured in async subject! ');

        // this.asyncSubject.complete();

        // this.playgroundService.of()
        //     .subscribe(data=> {console.log(data);
        // });

        // this.playgroundService.from()
        //     .subscribe(data=> {console.log(data);
        // });

        // this.playgroundService.map()
        //     .pipe(
        //         map(item=>item.name)
        //     )
        //     .subscribe(data => console.log(data));

        // this.playgroundService.map()
        //     .pipe(
        //         tap(item=>item.name)
        //     )
        //     .subscribe(data => console.log(data));

        // this.playgroundService.concat()
        //     .subscribe(data=>console.log(data));

        // this.playgroundService.getObservable()
        //     .pipe(
        //         // take(1) // uzima 1 takeLast(), last(), takeFirst(), First
        //         // last() //uzima poslednji

        //     ).subscribe(data => console.log(data));

        //  const sub: Subscription = this.playgroundService
        //     .getObservable()
        //     .subscribe(data => console.log(data));
        // this.subs.add(sub);

        // this.playgroundService.getObservable()
        //     .pipe(
        //         takeUntil(this.memoryLeakSubject)
        //     )
        //     .subscribe(data=> console.log(data));
        
        // this.playgroundService.getObservable()
        //     .pipe(
        //         takeUntil(this.memoryLeakSubject)
        //     )
        //     .subscribe(data=> console.log(data));

        // this.playgroundService.getObservable()
        //     .pipe(
        //         takeUntil(this.memoryLeakSubject)
        //     )
        //     .subscribe(data=> console.log(data));

        this.data$ = this.playgroundService.getObservable();
    }

    printValue(): void {
        console.log(this.myInputValue);
    }

    changeValue(): void {
        this.myInputValue = 'changed-value!';
    }

    addFormGroup() {
        const formGroup = new FormGroup({
            childName: new FormControl(null),
            childAge: new FormControl(null)
        });
        const childrenControl = this.reservationForm.get('children') as FormArray; 
        childrenControl.push(formGroup);
    }
    
    getChildrenControls() {
        const children = this.reservationForm.get('children') as FormArray;
        return children.controls;
    }

    removeFormControl(position: number) {
        const childrenControl = this.reservationForm.get('children') as FormArray; 
        childrenControl.removeAt(position);
    }

    makeReservation() {
        console.log(this.reservationForm);
    }

    private initializeForm(): void {
        this.reservationForm = new FormGroup({
          fullName: new FormControl(null, Validators.required),
          children: new FormArray([]) // FormGroup
        });
    }


}