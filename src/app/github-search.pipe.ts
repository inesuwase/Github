import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'githubSearch'
})
export class GithubSearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
