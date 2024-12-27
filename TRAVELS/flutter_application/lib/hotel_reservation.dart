import 'package:flutter/material.dart';

class HotelReservation extends StatelessWidget {
  const HotelReservation({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Hotel Reservation"),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: const Text("Hotel Reservation Page"),
      ),
    );
  }
}