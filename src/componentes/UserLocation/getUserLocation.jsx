import React, { Component } from 'react';

class GetLocation extends Component {

    componentDidMount() {
        this.getLoc();
    }

    getLoc() {
        var sUsrAg = navigator.userAgent, sBrowser = "";
        if (sUsrAg.indexOf("Firefox") > -1) {
            sBrowser = "Mozilla Firefox";
        } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
            sBrowser = "Samsung Internet";
        } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
            sBrowser = "Opera";
        } else if (sUsrAg.indexOf("Trident") > -1) {
            sBrowser = "Microsoft Internet Explorer";
        } else if (sUsrAg.indexOf("Edge") > -1) {
            sBrowser = "Microsoft Edge";
        } else if (sUsrAg.indexOf("Chrome") > -1) {
            sBrowser = "Google Chrome or Chromium";
        } else if (sUsrAg.indexOf("Safari") > -1) {
            sBrowser = "Apple Safari";
        } else {
            sBrowser = "unknown";
        }

        if (sBrowser !== "Apple Safari") {
            if (navigator) {
                if ("geolocation" in navigator) {
                    navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
                        this.props.permissions(permissionStatus.state)
                        if (permissionStatus.state === "granted") {
                            navigator.geolocation.getCurrentPosition((position) => {
                                this.props.latlng([position.coords.latitude, position.coords.longitude])
                            });
                        }
                    });
                } else {
                    this.props.permissions("Geolocation is not supported by this browser.")
                }
            }
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default GetLocation;