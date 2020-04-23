/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    OmvDataSource,
    OmvWithCustomDataProvider,
    OmvWithRestClientParams
} from "@here/harp-omv-datasource";

/**
 * `GeoJsonDataSource` is used for the visualization of geometric objects provided in the GeoJSON
 * format. To be able to render GeoJSON data, a `GeoJsonDataSource` instance must be added to the
 * [[MapView]] instance.
 *
 * @example <caption><b>Example usage of GeoJsonDataSource:</b></caption>
 * <pre>
 * const geoJsonDataSource = new GeoJsonDataSource({
 *    dataStore: {
 *       dataProvider: new XYZDataProvider({baseUrl, spaceId, token})
 *    }
 * });
 *
 * mapView.addDataSource(geoJsonDataSource);
 * // Show geoJSON data on specific tile
 * geoJsonDataSource.selectTile(geoJsonDataTile, mapView.projection);
 * </pre>
 */
export class GeoJsonDataSource extends OmvDataSource {
    /**
     * Default constructor.
     *
     * @param params Data source configuration's parameters.
     */
    constructor(readonly params: OmvWithRestClientParams | OmvWithCustomDataProvider) {
        super({ styleSetName: "geojson", ...params });
    }
}
