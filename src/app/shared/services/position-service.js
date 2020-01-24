export class PositionService {

    constructor() { }

    /**
     * @returns {Promise}
     */
    retrieve() {
        return new Promise((resolve, reject) => {
            navigator.geolocation
                .getCurrentPosition(
                    (position) => { resolve(position) },
                    (error) => { reject(error) }
                );
        });
    };

}
