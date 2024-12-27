import 'package:flutter/material.dart';

class PlaneReservation extends StatelessWidget {
  const PlaneReservation({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Plane Reservation"),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: const Text("Plane Reservation Page"),
      ),
    );
  }
}