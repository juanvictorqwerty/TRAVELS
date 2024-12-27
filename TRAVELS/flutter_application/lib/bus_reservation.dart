      import 'package:flutter/material.dart';
      import 'package:google_maps_flutter/google_maps_flutter.dart';
      
      class BusReservation extends StatefulWidget {
        const BusReservation({super.key});
      

        @override
        State<BusReservation> createState() => _BusReservationState();
      }
      

      class _BusReservationState extends State<BusReservation> {
        late GoogleMapController mapController;
      

        final LatLng _center = const LatLng(-33.86, 151.20);
      

        void _onMapCreated(GoogleMapController controller) {
          mapController = controller;
        }
      

        @override
        Widget build(BuildContext context) {
          return MaterialApp(
            home: Scaffold(
              appBar: AppBar(
                title: const Text('Maps Sample App'),
                backgroundColor: Colors.green[700],
              ),
              body: GoogleMap(
                onMapCreated: _onMapCreated,
                initialCameraPosition: CameraPosition(
                  target: _center,
                  zoom: 11.0,
                ),
              ),
            ),
          );
        }
      }