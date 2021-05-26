import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

//not in use
export class InputIdValidator {
    static checkEven(ctrl: AbstractControl, values: Array<any>): any {
        let inputValue = parseInt(ctrl.value);
        var match = values.filter((v) => v.Id === inputValue)
        if (match)
            return { duplicate: true };
        return null;
    }
}

export function uniqueIdValidator(values: Array<any>): ValidatorFn {
    return (ctrl: AbstractControl): ValidationErrors | null => {
        let inputValue = parseInt(ctrl.value);
        var match = values.filter((v) => v.Id === inputValue || v.ProductRowId === inputValue)
        if (isNaN(inputValue) == false && match.length !== 0)
            return { duplicate: true };
        return null;
    }
}