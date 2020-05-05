
export abstract class SWATracker {
    private static MatomoTracker = require('matomo-tracker');
    private static matomo = new SWATracker.MatomoTracker("acfb4b3c-a451-4e31-bbd5-69e0204951f7","https://webanalytics2.cfapps.eu10.hana.ondemand.com/tracker/log", true);
    public static trackSWA(eventType: string, id: string) {
        this.matomo.on('error', function(err: any) {
            console.log('error tracking request: ', err);
        });
        this.matomo.track({
            url: "mysite.com",
            _id: id,
            event_type: eventType
        })
    }
}