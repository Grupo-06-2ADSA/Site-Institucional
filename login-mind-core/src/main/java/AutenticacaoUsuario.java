import java.util.List;
import java.util.Scanner;

public class AutenticacaoUsuario {
    Scanner leitor = new Scanner(System.in);
    void RealizarLogin(String usuario, Integer senha, List<String> listaUsuarios, List<Integer> listaSenhas){
        Boolean hasCadastro = false;

        for (int i = 0; i < listaUsuarios.size(); i++){
            if (usuario.equals(listaUsuarios.get(i)) && senha.equals(listaSenhas.get(i))) {
                hasCadastro = true;
                break;
            }
        }

        if (hasCadastro){
            System.out.println("Acesso liberado!");

            System.out.println("""
                    Deseja cadastrar outro usuário?
                    s - sim
                    n - não
                    """);
            String respostaConta = leitor.next();

            if (respostaConta.equalsIgnoreCase("s")){
                FazerCadastro(listaUsuarios,listaSenhas);
            }
        } else {
            System.out.println("Acesso negado!");
        }
    }

    void CadastrarUsuario(String usuario, Integer senha, Integer confirmacaoSenha, List<String> listaUsuarios, List<Integer> listaSenhas){
        listaUsuarios.add(usuario);

        if (confirmacaoSenha.equals(senha)){
            listaSenhas.add(senha);
            System.out.println("Cadastrado com sucesso!");

            System.out.println("""
                    Deseja entrar na sua conta?
                    s - sim
                    n - não
                    """);
            String respostaConta = leitor.next();

            if (respostaConta.equalsIgnoreCase("s")) {
                FazerLogin(listaUsuarios, listaSenhas);
            }
        } else {
            do {
                System.out.println();
                System.out.print("""
                        A confirmação está incorreta
                        Por favor, confirme sua senha:
                        """);
                confirmacaoSenha = leitor.nextInt();

            } while (!confirmacaoSenha.equals(senha));

            listaSenhas.add(senha);

            System.out.println("Cadastrado com sucesso!");
        }
    }

    void FazerLogin(List<String> listaUsuarios, List<Integer> listaSenhas){
        System.out.println();
        System.out.print("""
                ****** Entre na sua conta ******
                Usuário: 
                """);
        String usuario = leitor.next();

        System.out.print("Senha: ");
        Integer senha = leitor.nextInt();

        RealizarLogin(usuario, senha, listaUsuarios, listaSenhas);
    }

    void FazerCadastro(List<String> listaUsuarios, List<Integer> listaSenhas){
        System.out.println();
        System.out.print("""
                ****** Cadastre-se ******
                Usuário: 
                """);
        String usuario = leitor.next();

        System.out.print("Senha: ");
        Integer senha = leitor.nextInt();

        System.out.print("Confirmação de senha: ");
        Integer confirmacaoSenha = leitor.nextInt();

        CadastrarUsuario(usuario, senha, confirmacaoSenha, listaUsuarios, listaSenhas);
    }

}
