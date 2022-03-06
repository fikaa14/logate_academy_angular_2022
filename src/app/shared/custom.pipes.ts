import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'custom' })
export class CustomPipe implements PipeTransform{
    
    transform(value: any, ...args: any[]) {
        console.log("INPUT: ", value);
        const separator = args[0];
        const categories = value.split(separator);
        return categories;
    }

}

// {
//     name: 'Proizvod 1',
//     description: 'Opis 1',
//     category: 'Kategoriji1#Kategoriji2'
// }