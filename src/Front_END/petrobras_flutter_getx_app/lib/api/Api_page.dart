import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';

class ApiPage extends StatefulWidget {
  const ApiPage({super.key});

  @override
  State<ApiPage> createState() => _ApiPageState();
}

class _ApiPageState extends State<ApiPage> {
  String? textoExtraido;

  @override
  void initState() {
    super.initState();
    fetchData();
  }

  fetchData() async {
    final response =
        await http.get(Uri.parse('http://localhost:5000/get_data'));
    if (response.statusCode == 200) {
      setState(() {
        textoExtraido = json.decode(response.body)['textoExtraido'];
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Dados Extraídos do PDF'),
      ),
      body: Center(
        child: textoExtraido == null
            ? CircularProgressIndicator()
            : Card(
                margin: EdgeInsets.all(20.0),
                child: Padding(
                  padding: EdgeInsets.all(16.0),
                  child: Text(textoExtraido!, style: TextStyle(fontSize: 16)),
                ),
              ),
      ),
    );
  }
}
