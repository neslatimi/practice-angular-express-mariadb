import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText:string): any {
    // if(!value){
    //   return value
    // }
    return value.filter((item)=>{
      return item.name.indexOf(searchText)>-1;
    });
  }

}
