import java.util.List;
import java.util.Scanner;

public class AutenticacaoUsuario {
    Scanner leitor = new Scanner(System.in);
    Scanner leitorNome = new Scanner(System.in);

    // Realiza a verificação na lista de dados
    void RealizarLogin(String email, String senha, List<String> listaDadosUsuario){
        boolean hasCadastro = false;

        for (int i = 0; i < listaDadosUsuario.size(); i++){
            if (listaDadosUsuario.get(i).equals(email) && listaDadosUsuario.get(i + 4).equals(senha)) {
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
                FazerCadastro(listaDadosUsuario);
            }
        } else {
            System.out.println("Acesso negado!");
        }
    }

    // Cadastra os dados na lista
    void CadastrarUsuario(String email, String cnpj, String nomeEmpresa, String telefone, String senha,  List<String> listaDadosUsuario){
        listaDadosUsuario.add(email);
        listaDadosUsuario.add(cnpj);
        listaDadosUsuario.add(nomeEmpresa);
        listaDadosUsuario.add(telefone);
        listaDadosUsuario.add(senha);

        System.out.println("Cadastrado com sucesso!");
    }

    // Monta a estrutura do login
    void FazerLogin(List<String> listaDadosUsuario){
        System.out.println();
        System.out.println("****** Entre na sua conta ******");
        System.out.print("Email: ");
        String email = leitor.next();

        System.out.print("Senha: ");
        String senha = leitor.next();

        RealizarLogin(email, senha, listaDadosUsuario);
    }

    // Monta a estrutura do cadastro
    void FazerCadastro(List<String> listaDadosUsuario){
        System.out.println();
        System.out.println("****** Cadastro ******");
        System.out.print("Email: ");
        String email;

        do {
            email = leitor.next();

            if (email.contains("@") && email.contains(".")){
                break;
            }

            System.out.println("Email deve conter '@' e '.'");
        } while (true);

        System.out.print("CNPJ - apenas números: ");
        String cnpj;

        do {
            cnpj = leitor.next();

            if (cnpj.length() == 14){
                break;
            }

            System.out.println("CNPJ deve conter 14 dígitos");
        } while (true);


        System.out.print("Nome da empresa: ");
        String nomeEmpresa;

        do {
            nomeEmpresa = leitorNome.nextLine();

            if (!nomeEmpresa.isEmpty()){
                break;
            }

            System.out.println("Nome inválido");
        } while (true);

        System.out.print("Telefone - apenas números: ");
        String telefone;

        do {
            telefone = leitor.next();

            if (telefone.length() == 11) {
                break;
            }

            System.out.println("Telefone deve conter 11 dígitos");

        } while (true);

        System.out.print("Senha: ");
        String senha;

        do {
            senha = leitor.next();

            if (senha.length() >= 6){
                break;
            }

            System.out.println("Senha deve conter 6 dígitos ou mais");
        } while (true);

        CadastrarUsuario(email, cnpj, nomeEmpresa, telefone, senha, listaDadosUsuario);
    }

}
