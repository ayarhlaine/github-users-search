import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { useEffect } from 'react';
import { callGitAPIService,updateUserActionService } from './GitUserService';
export const useSubject = (inputSubject$ :Subject<string>,callAction: typeof callGitAPIService,updateUserAction: typeof updateUserActionService) => {
    let dataSubscription$: Subscription;
    let typingSubscription$: Subscription;
    
    useEffect(() => {
        // eslint-disable-next-line
        dataSubscription$ = inputSubject$.pipe(
            debounceTime(1000)
        ).subscribe((newSearchText: string) => {
            updateUserAction('Getting Data from Github ...')
            callAction(newSearchText);
        });
        // eslint-disable-next-line
        typingSubscription$ = inputSubject$.subscribe((newSearchText: string) => updateUserAction('Typing ...'));
        return () => { 
            dataSubscription$.unsubscribe();
            typingSubscription$.unsubscribe();
        };
    }, [inputSubject$,callAction]);
}