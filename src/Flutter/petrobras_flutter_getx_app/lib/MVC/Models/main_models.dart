import 'PythonApi.dart';

void main() async {
  final api = PythonAPI();

  await api.initialize();

  // Simulando o clique em três botões diferentes
  await api.getPythonVersion();
  await api.getCurrentDirectory();
  await api.getHelloMessage();

  print("All Python functions executed!");
}
