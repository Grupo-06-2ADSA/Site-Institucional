import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.DiscoGrupo;
import com.github.britooo.looca.api.group.memoria.Memoria;
import com.github.britooo.looca.api.group.processador.Processador;
import com.github.britooo.looca.api.group.processos.ProcessoGrupo;
import com.github.britooo.looca.api.group.servicos.ServicoGrupo;
import com.github.britooo.looca.api.group.sistema.Sistema;
import com.github.britooo.looca.api.group.temperatura.Temperatura;

import java.util.List;
import java.util.Scanner;

public class AutenticacaoUsuario {
    Scanner leitor = new Scanner(System.in);
    Scanner leitorNome = new Scanner(System.in);

    private final Sistema sistema;
    private final Memoria memoria;
    private final Processador processador;
    private final Temperatura temperatura;
    private final DiscoGrupo grupoDeDiscos;

    public AutenticacaoUsuario(Sistema sistema, Memoria memoria, Processador processador, Temperatura temperatura, DiscoGrupo grupoDeDiscos) {
        this.sistema = sistema;
        this.memoria = memoria;
        this.processador = processador;
        this.temperatura = temperatura;
        this.grupoDeDiscos = grupoDeDiscos;
    }

    public void teste(){
        System.out.println(sistema);
        System.out.println(memoria);
        System.out.println(processador);
        System.out.println(temperatura);

    }


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
            System.out.println("Acesso liberado");
        } else {
            System.out.println("Acesso negado");
        }
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

}
