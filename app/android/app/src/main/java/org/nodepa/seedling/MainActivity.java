package org.nodepa.seedling;

import com.getcapacitor.BridgeActivity;
import android.os.Bundle;
import android.util.Log;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    // registerPlugin(MyTestPlugin.class);
    Log.e("ERROR", "[Seedling startup debuging]");
    Log.w("WARN", "[Seedling startup debuging]");
    Log.i("INFO", "[Seedling startup debuging]");
    Log.i("INFO", "[Seedling Version: " + BuildConfig.VERSION_NAME);
    Log.d("DEBUG", "[Seedling startup debuging]");
    Log.v("VERBOSE", "[Seedling startup debuging]");
    super.onCreate(savedInstanceState);
  }
}
