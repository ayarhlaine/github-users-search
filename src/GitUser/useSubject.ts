import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { useEffect } from 'react';
import { callGitAPIService } from './GitUserService';
export const useSubject = (subject: Subject<string>,callAction: typeof callGitAPIService) => {
    useEffect(() => {
        const subscription = subject.pipe(
            debounceTime(1000)
        ).subscribe((newSearchText: string) => callAction(newSearchText));
        return () => subscription.unsubscribe();
    }, [subject,callAction]);
}